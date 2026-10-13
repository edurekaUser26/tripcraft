function Button({ children, variant = 'primary', type = 'button' }) {
     const styles =
       variant === 'primary'
         ? 'bg-sky-700 text-white hover:bg-sky-800'
         : 'border border-slate-300 text-slate-700 hover:bg-slate-100'

     return (
       <button type={type} className={`rounded px-4 py-2 text-sm font-medium ${styles}`}>
         {children}
       </button>
     )
   }

   export default Button