import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikProps,
  useFormikContext,
} from "formik";
import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { UserService } from "../api/UserService";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "../ui-kit/Button";

type LoginFormValues = {
  name: string;
  password: string;
  rememberMe: boolean;
};

export const LoginPage: FC = () => {
  const { setIsLoggedIn, isLoggedIn } = useAuthContext();
  const [error, setError] = useState("");

  if (isLoggedIn) return <Navigate to={"/"} />;

  const initialValues: LoginFormValues = {
    name: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = async (
    user: LoginFormValues,
    { resetForm }: FormikHelpers<LoginFormValues>
  ) => {
    UserService.getUsers().then((res) => {
      const currentUser = res.data.find(
        (f) => f.username === user.name && f.password === user.password
      );
      if (!currentUser) {
        setError("No such user");
        resetForm();
        return;
      }
      setIsLoggedIn(true);
      resetForm();
    });
  };

  // validate = это функция, а вот validateScheme с помощью yup - object
  const validate = (values: LoginFormValues) => {
    let errors: FormikErrors<LoginFormValues> = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.password) errors.password = "Password is required";
    return errors;
  };
  return (
    <Root>
      <Formik
        component={(formikProps) => (
          <LoginForm error={error} setError={setError} {...formikProps} />
        )}
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
      />
    </Root>
  );
};

interface OtherProps {
  error: string;
  setError: (value: string) => void;
}

const LoginForm = ({
  error,
  setError,
}: OtherProps & FormikProps<LoginFormValues>) => {
  const { dirty, isValid, isSubmitting, values, initialValues } =
    useFormikContext<LoginFormValues>();

  useEffect(() => {
    if (error) {
      // Проверяем, есть ли изменения в значениях полей формы
      const isFieldChanged = Object.keys(values).some(
        (fieldName) =>
          values[fieldName as keyof LoginFormValues] !==
          initialValues[fieldName as keyof LoginFormValues]
      );

      // Если есть изменения, сбрасываем ошибку
      if (isFieldChanged) {
        setError("");
      }
    }
  }, [values, setError, initialValues, error]);

  return (
    <Container>
      <FlexForm>
        <FormField>
          <label htmlFor={"name"}>Name</label>
          <Field id={"name"} placeholder={"Type a name"} name={"name"} />
          <ErrorMessage component={"span"} name="name" />
        </FormField>

        <FormField>
          <label htmlFor={"password"}>Password</label>
          <Field
            id={"password"}
            placeholder={"Type a password"}
            name={"password"}
          />
          <ErrorMessage component={"span"} name="password" />
        </FormField>

        <CheckBoxFormField>
          <label htmlFor={"rememberMe"}>Remember me</label>
          <Field type={"checkbox"} id={"rememberMe"} name={"rememberMe"} />
        </CheckBoxFormField>

        <div>{error}</div>

        <ButtonContainer>
          <Button
            buttonText={"Submit"}
            type={"submit"}
            disabled={!dirty || !isValid || isSubmitting}
          />
          <Button buttonText={"Reset"} type={"reset"} disabled={!dirty} />
        </ButtonContainer>
      </FlexForm>
    </Container>
  );
};

const Root = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 auto;
  min-width: 38.4rem;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  min-height: 40rem;
  max-width: 60rem;
  border-radius: 9px;
`;

const FlexForm = styled(Form)`
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.8rem;
  align-items: center;
`;

const StyledField = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 1.6rem;
`;

const FormField = styled(StyledField)`
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 0.6rem;
  width: 80%;

  & > label {
    display: block;
    width: 100%;
    text-align: center;
  }

  & > input {
    width: 100%;
    padding: 0.6rem;
    border: none;
    border-bottom: 1px solid black;
    outline: none; // уберет бордеры когда инпут не активен
  }

  & > span {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    color: mediumvioletred;
  }
`;

const CheckBoxFormField = styled(StyledField)``;

const ButtonContainer = styled.div`
  display: flex;
  gap: 3.6rem;
  align-items: center;
`;
