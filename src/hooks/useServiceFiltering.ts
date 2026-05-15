import { useMemo } from 'react';

type AudienceTab = 'all' | 'residential' | 'commercial';

export function useServiceFiltering<T extends { audience?: string[] }>(
  services: T[] | undefined,
  activeTab: AudienceTab
) {
  return useMemo(() => {
    if (!services) return [];

    if (activeTab === 'all') return services;

    return services.filter((s) => {
      const audience: string[] | undefined = s.audience;
      return audience?.includes(activeTab);
    });
  }, [activeTab, services]);
}

