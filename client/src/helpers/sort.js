const sortProp = (prop, innerProp) => {
    if (innerProp) {
        return (a, b) => {
            const _a = a[prop][innerProp];
            const _b = b[prop][innerProp];
            if (_a > _b) return 1;
            if (_a == _b) return 0;
            if (_a < _b) return -1;
        }
    }
    return (a, b) => {
        const _a = a[prop];
        const _b = b[prop];
        if (_a > _b) return 1;
        if (_a == _b) return 0;
        if (_a < _b) return -1;
    };
};

export { sortProp };