import { useState, useEffect } from 'react';

// Custom hook useFetch — reutilizable para cualquier URL
// Devuelve { data, loading, error } igual que el patrón de Angular con toSignal
export function useFetch<T>(url: string) {
  const [data, setData]       = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    setData(null);
    setLoading(true);
    setError(null);

    const controller = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: T = await res.json();
        setData(json);
      } catch (err) {
        if ((err as Error).name === 'AbortError') return; // petición cancelada, no es un error
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup: cancela la petición si el componente se desmonta antes de recibir respuesta
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
