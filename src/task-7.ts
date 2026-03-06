const getMessage = (): Promise<string> => {
    return new Promise((resolev) => {
        setTimeout(() => resolev("Hello from TS"),1000);
    });
};

getMessage().then(result => console.log(result));