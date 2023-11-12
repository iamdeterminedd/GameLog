import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import platform from '../data/platform';

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient.get('/platforms/lists/parents').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
