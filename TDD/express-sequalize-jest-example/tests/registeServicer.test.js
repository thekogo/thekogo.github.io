const db = {
    user: {
        create: () => {
            return {
                id: 2
            }
        }
    }
}

const registerService = require('../services/register_service')(db);

test('Username is not empty string', async () => {
    const data = await registerService.userCreate('KoGo')
    // expect(data).toBeTruthy();
    expect(data.username).toBeDefined();
    expect(data.username).not.toEqual('');
})

test('userId is defined', async () => {
    const data = await registerService.userCreate('KoGo')
    // expect(data).toBeTruthy();
    expect(data.userId).toBeDefined();
})