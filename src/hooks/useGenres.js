import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import genre from '../data/genre';

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 100,
    initialData: { count: genre.length, results: genre },
  });

export default useGenres;
