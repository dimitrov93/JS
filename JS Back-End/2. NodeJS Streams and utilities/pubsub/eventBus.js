const subscribers = [];

// addEventListener
exports.subscribe = (eventType, callback) => {
    if (!subscribers[eventType]) {
        subscribers[eventType] = [];
    }

    subscribers[eventType].push(callback);

    return () => {
        subscribers[eventType] = subscribers[eventType].filter(x => x != callback)
    }
};

// Emmit
exports.publish = (eventType, ...params) => {
    subscribers[eventType].forEach(x => x.apply(null, params)); // (x => x(...params));
}