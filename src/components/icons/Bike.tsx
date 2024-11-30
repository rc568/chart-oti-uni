
export const Bike = ({ size = "24", color = "#000" }) => (
    <svg
        width={size}
        height={size}
        fill="none"
        stroke={color}
        strokeLinecap="square"
        aria-labelledby="bikeIconTitle"
        color="#000"
        viewBox="0 0 24 24"
    >
        <title>{"Bike"}</title>
        <circle cx={14} cy={6} r={1} />
        <path d="M12 18v-4l-3-2 3-3 2 2 2 1" />
        <circle cx={6} cy={17} r={3} />
        <circle cx={18} cy={17} r={3} />
    </svg>
)
