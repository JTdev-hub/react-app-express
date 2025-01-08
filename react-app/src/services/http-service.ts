import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:8080" });

interface Entity {
  id: number;
}

class HttpService<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (id?: number) => {
    const url = id ? `${this.endpoint}?id=${id}` : this.endpoint;
    return axiosInstance.get<T[]>(url).then((res) => res.data);
  };

  delete = (id: number) => {
    return axiosInstance.delete(this.endpoint + "/" + id);
  };

  create = (entity: T) => {
    return axiosInstance
      .post(this.endpoint, entity, {
        maxContentLength: 50 * 1024 * 1024,
      })
      .then((res) => res.data);
  };

  update = <T extends Entity>(entity: T) => {
    return axiosInstance.patch(this.endpoint + "/" + entity.id, entity);
  };
}

export default HttpService;
