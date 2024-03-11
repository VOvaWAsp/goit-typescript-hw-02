/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Error = Partial<Errors>;

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Error;
};

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Form;

export {};
