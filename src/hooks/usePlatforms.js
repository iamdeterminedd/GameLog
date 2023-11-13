import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import platform from '../data/platform';

const apiClient = new APIClient('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platform,
  });

export default usePlatforms;
