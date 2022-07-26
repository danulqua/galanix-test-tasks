import axios from 'axios';

interface ApiResponse {
  alpha_two_code: string;
  'state-province': string;
  country: string;
  name: string;
  web_pages: string[];
  domains: string[];
}

export interface University {
  alphaTwoCode: string;
  country: string;
  name: string;
  webPage: string;
}

class UniversitiesService {
  private baseUrl = 'http://universities.hipolabs.com';

  public getUniversitiesByCountry = async (country: string) => {
    // TODO: write logic for error handling
    // Since API works without errors, there won't be any critical problems if we don't
    // handle error with try/catch, but generally, it's better to implement this kind of logic
    const { data } = await axios.get<ApiResponse[]>(`${this.baseUrl}/search`, {
      params: { country }
    });

    const transformedData: University[] = data.map(this.transformUniversity);
    return transformedData;
  };

  // Get rid of data that we don't need
  private transformUniversity = (university: ApiResponse) => ({
    alphaTwoCode: university.alpha_two_code,
    country: university.country,
    name: university.name,
    webPage: university.web_pages[0]
  });
}

export default new UniversitiesService();
