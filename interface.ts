export interface TrainingProps {
  setData: React.Dispatch<
    React.SetStateAction<{
      full_name: string;
      email: string;
      phone_no: string;
      for: string;
      relationship: string;
    }>
  >;
  data: {
    full_name: string;
    email: string;
    phone_no: string;
    for: string;
    relationship: string;
  };
}
