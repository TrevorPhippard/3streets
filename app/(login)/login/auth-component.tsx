const Button = ({ children, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => (
    <button {...props}>{children}</button>
);

export function SignIn({
    ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
    return (
        <form
            action={async () => {
                "use server"
            }}
        >
            <Button {...props}> Sign In</Button >
        </form >
    )
}