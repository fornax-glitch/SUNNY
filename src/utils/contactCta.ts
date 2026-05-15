

export type AudienceTab = 'all' | 'residential' | 'commercial';

export function getContactHref(activeTab: AudienceTab) {
  return activeTab === 'commercial' ? '/contact?type=commercial' : '/contact';
}


