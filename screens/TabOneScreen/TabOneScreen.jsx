import styled from '@aliveornot/styled-vu';
import { TouchableHighlight } from 'react-native';
import { useUserPersistentStore } from '../../stores/userStore';
import LoginState from './LogInState';

function useData() {
    const { user, setUser } = useUserPersistentStore();
    return { user, setUser };
}

export default function TabOneScreen({ onPressLogIn }) {
    const { user, setUser } = useData();

    return (
        <_Container>
            <_TitleText>Tab One</_TitleText>
            <LoginState />
            <TouchableHighlight
                onPress={() => {
                    setUser({ isLoggedIn: true });
                }}
            >
                <_BlueBox>
                    <_LoginText>login</_LoginText>
                </_BlueBox>
            </TouchableHighlight>
            <_DividerView />
            <TouchableHighlight
                onPress={() => {
                    setUser({ isLoggedIn: false });
                }}
            >
                <_RedBox>
                    <_LogoutText>logout</_LogoutText>
                </_RedBox>
            </TouchableHighlight>
        </_Container>
    );
}
TabOneScreen.defaultProps = {
    onPressLogIn: () => {
        console.log('login');
    },
};

///////////
//styling//
///////////
const _Container = styled.Vu`
    flex: 1;
    align-items: center;
    justify-content: center;

    row-gap: 20px;
`;

const _BlueBox = styled.View`
    height: 100px;
    width: 100px;
    background-color: blue;
    align-items: center;
    justify-content: center;
`;

const _RedBox = styled.View`
    height: 100px;
    width: 100px;
    background-color: red;
    align-items: center;
    justify-content: center;
`;

const _TitleText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const _DividerView = styled.Vu`
    margin-top: 30px;
    margin-bottom: 30px;
    height: 2px;
    width: 80%;
    background-color: #00000050;
`;

const _LoginText = styled.Text``;
const _LogoutText = styled.Text``;
