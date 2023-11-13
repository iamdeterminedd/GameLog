import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import genre from '../data/genre';

const apiClient = new APIClient('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hours
    initialData: genre,
  });

export default useGenres;
