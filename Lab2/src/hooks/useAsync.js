import { useState, useEffect, useCallback } from 'react';

export function useAsync(asyncFunction) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await asyncFunction();
            setData(result);
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, [asyncFunction]);

    useEffect(() => {
        execute();
    }, [execute]);

    return { data, loading, error, execute };
}
