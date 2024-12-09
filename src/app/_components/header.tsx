interface HeaderProps {
    label: string;
}

export const Header = ({label}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className="text-3xl flex flex-row">
                <p className=" font-semibold">Dorm</p> <p className="text-husky-red font-bold">Pop</p>
            </h1>
            <p className="text-black/50 text-sm">
                {label}
            </p>
        </div>
    )
}