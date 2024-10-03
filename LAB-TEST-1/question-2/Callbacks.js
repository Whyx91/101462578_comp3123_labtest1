function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
}


function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('delayed exception!'));
        }, 500);
    });
}


resolvedPromise()
    .then(success => console.log(success))  // Output: { message: 'delayed success!' }
    .catch(error => console.error(error));

rejectedPromise()
    .then(success => console.log(success))
    .catch(error => console.error({ error: error.message }));  // Output: { error: 'delayed exception!' }