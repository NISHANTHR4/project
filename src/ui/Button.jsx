import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block  font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed hover:bg-yellow-300  text-sm";
  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    roundm:
      base +
      " px-[11.5px] py-[3px] md:px-[13.7px] md:py-[5.5px] text-base font-bold",
    roundp:
      base +
      " px-[10.4px] py-[3.7px] md:px-[12.0px] md:py-[5.6px] text-base font-bold",
    secondary:
      "inline-block text-sm font-semibold tracking-wide border-2 border-stone-300 uppercase transition-colors duration-300  rounded-full text-stone-400 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed  px-4 py-2.5 sm:px-6 sm:py-3.5 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <div>
        <button onClick={onClick} disabled={disabled} className={styles[type]}>
          {children}
        </button>
      </div>
    );
  }

  return (
    <div>
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    </div>
  );
}

export default Button;
