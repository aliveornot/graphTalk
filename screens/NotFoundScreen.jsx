import styled from '@aliveornot/styled-vu';
import { useNavigation } from '@react-navigation/native';

export default function NotFoundScreen() {
    const navigation = useNavigation();
9
    return (
        <_ContainerView>
            <_TitleText>This screen doesn't exist.</_TitleText>
            <_TouchableOpacity onPress={() => navigation.navigate({ name: 'Root' })}>
                <_LinkText>Go to home screen!</_LinkText>
            </_TouchableOpacity>
        </_ContainerView>
    );
}

const _ContainerView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const _TitleText = styled.Text({
    fontSize: '20px',
    fontWeight: 'bold',
});

const _TouchableOpacity = styled.TouchableOpacity`
    margin-top: 15;
    padding-top: 15;
    padding-bottom: 15;
`;

const _LinkText = styled.Text({ fontSize: 14, color: '#2e78b7' });
