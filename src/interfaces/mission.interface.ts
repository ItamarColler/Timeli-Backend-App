export default interface IMission {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  finished: boolean;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
