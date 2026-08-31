// API Client for communicating with the backend
// This layer allows easy swapping of the backend implementation
/* eslint-disable @typescript-eslint/no-unused-vars */

export const apiClient = {
  async get<T>(_url: string): Promise<T> {
    // For now, this will be mocked
    // Later, replace with real fetch calls
    return {} as T;
  },

  async post<T>(_url: string, _data: unknown): Promise<T> {
    // For now, this will be mocked
    // Later, replace with real fetch calls
    return {} as T;
  },

  async put<T>(_url: string, _data: unknown): Promise<T> {
    // For now, this will be mocked
    // Later, replace with real fetch calls
    return {} as T;
  },

  async delete<T>(_url: string): Promise<T> {
    // For now, this will be mocked
    // Later, replace with real fetch calls
    return {} as T;
  },
};
