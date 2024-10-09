export const generateQueryParams = (object: Record<string, string | number>) => {
    const keys = Object.keys(object);

    return keys
        .map((key, index) => {
            if (object[key]) {
                if (index === 0) return `${key}=${object[key]}`;
                else return `&${key}=${object[key]}`;
            }
        })
        .join('');
};
