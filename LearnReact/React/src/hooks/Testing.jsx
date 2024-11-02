import useCurrency from './useCurrency';

export default function Testing() {
    const data = useCurrency('usd');  // Fetch data for USD

    return (
        <div>
            <h1>Currency Data</h1>
            <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
        </div>
    );
}
