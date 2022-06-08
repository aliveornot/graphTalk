let ENV;
switch (branch) {
    case 'develop':
        ENV = {
            endpoint: '11.11.11.11/development',
        };
        break;
    case 'master':
        ENV = {
            endpoint: '11.11.11.11/production',
        };
        break;
}

export default ENV;
