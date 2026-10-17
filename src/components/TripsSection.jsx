import { useActionState, useOptimistic } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { useFormStatus } from "react-dom";
import Button from "./Button.jsx";
import { useTrips } from "../hooks/useTrips.js";
import { createTrip } from "../api/trips.js";

const initialFormState = {
  error: null,
  values: { destination: "", startDate: "" },
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving…" : "Create trip"}
    </Button>
  );
}

function TripsSection() {
  const { data: trips } = useTrips();
  const queryClient = useQueryClient();
  const [optimisticTrips, addOptimisticTrip] = useOptimistic(
    trips,
    (currentTrips, newTrip) => [...currentTrips, newTrip],
  );

  async function createTripAction(previousState, formData) {
    const values = {
      destination: formData.get("destination").trim(),
      startDate: formData.get("startDate"),
    };

    if (values.destination.length < 2) {
      return {
        error: "Enter a destination with at least 2 characters.",
        values,
      };
    }
    if (!values.startDate) {
      return { error: "Choose a start date.", values };
    }

    addOptimisticTrip({
      ...values,
      id: `pending-${Date.now()}`,
      pending: true,
    });

    try {
      await createTrip(values);
      await queryClient.invalidateQueries({ queryKey: ["trips"] });
      return initialFormState;
    } catch {
      return { error: "We couldn't save the trip. Please try again.", values };
    }
  }

  const [formState, formAction] = useActionState(
    createTripAction,
    initialFormState,
  );

  return (
    <div className="mt-6 space-y-6">
      <form
        action={formAction}
        className="grid gap-3 rounded-lg bg-white p-4 shadow-sm sm:grid-cols-3 sm:items-end"
      >
        <div>
          <label
            htmlFor="trip-destination"
            className="block text-sm font-medium"
          >
            Destination
          </label>
          <input
            id="trip-destination"
            name="destination"
            type="text"
            defaultValue={formState.values.destination}
            aria-describedby={formState.error ? "trip-form-error" : undefined}
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="trip-start" className="block text-sm font-medium">
            Start date
          </label>
          <input
            id="trip-start"
            name="startDate"
            type="date"
            defaultValue={formState.values.startDate}
            aria-describedby={formState.error ? "trip-form-error" : undefined}
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          />
        </div>
        <SubmitButton />
        {formState.error && (
          <p
            id="trip-form-error"
            role="alert"
            className="text-sm text-red-700 sm:col-span-3"
          >
            {formState.error}
          </p>
        )}
      </form>

      <ul className="grid gap-4 sm:grid-cols-2">
        {optimisticTrips.map((trip) => (
          <li key={trip.id}>
            {trip.pending ? (
              <div className="rounded-lg bg-white p-5 opacity-60 shadow-sm">
                <h2 className="text-lg font-semibold">{trip.destination}</h2>
                <p className="text-sm text-slate-500">Saving…</p>
              </div>
            ) : (
              <Link
                to={`/trips/${trip.id}`}
                className="block rounded-lg bg-white p-5 shadow-sm hover:ring-2 hover:ring-sky-700"
              >
                <h2 className="text-lg font-semibold">{trip.destination}</h2>
                <p className="text-sm text-slate-500">
                  Starts {trip.startDate}
                </p>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripsSection;
