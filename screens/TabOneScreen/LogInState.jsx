export default function LoginState() {
    const { user, setUser } = useUserAtom();

    return <Text>LoginState: {String(user.isLoggedIn || false)}</Text>;
}
