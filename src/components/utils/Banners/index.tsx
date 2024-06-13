import ReactCountryFlag from "react-country-flag"

export const Palestine: React.FC = () => {
    return (
        <div className="flex justify-center items-center gap-2 w-full">
            <ReactCountryFlag countryCode="PS" svg/>
            <p className="text-[0.7em] sm:text-sm font-semibold font-poppins">We stand with Palestine. Fight the oppression.</p>
        </div>
    )
}
