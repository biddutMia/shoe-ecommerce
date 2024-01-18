import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { loginAndSigninBtn, loginAndSignin } from "../../../style.module.css";
import InputField from "../inputField/InputField";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";

const Form = ({
  handleSubmit: submitForm,
  isLogin,
  btnTitle,
  defaultValue,
}) => {
  const formValue = Object.keys(defaultValue).reduce((acc, cur) => {
    acc[cur] = "";
    return acc;
  }, {});

  const {
    control,
    handleSubmit,
    reset,
    clearErrors,

    formState: {
      errors,
      isSubmitSuccessful,
      isValid,
      isSubmitted,
      isSubmitting,
    },
  } = useForm({
    defaultValues: {
      ...formValue,
    },
  });


  useEffect(() => {
    // reset();

    clearErrors();
  }, [isSubmitSuccessful]);

  return (
    <Box
      className={loginAndSignin}
      sx={{
        margin: "20px auto",
        background: "#F4F6F6",
        padding: "30px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <Box>
        <form onSubmit={handleSubmit((data,e)=>submitForm(data,e,reset))}>
          <Grid container spacing={3}>
            {Object.keys(defaultValue).map((item, index) => {
              const { placeholder, type } = defaultValue[item];

              const rule = defaultValue[item].validate;

              return (
                <Grid
                  item
                  xs={12}
                  md={isLogin ? 12 : 6}
                  key={index}
                  sx={{ overflow: "hidden" }}
                >
                  <Controller
                    name={item}
                    control={control}
                    rules={rule}
                    render={({ field }) => {
                      return (
                        <InputField
                          type={defaultValue[item].type}
                          field={field}
                          placeholder={placeholder}
                        />
                      );
                    }}
                  />
                  {errors[item]?.message && (
                    <Box>
                      <Typography
                        component={"div"}
                        variant="caption"
                        sx={{
                          color: "red",
                          textAlign: "left",
                          margin: "0 auto",
                          marginTop: "5px",
                          width: "220px",
                        }}
                      >
                        {errors[item]?.message}
                      </Typography>
                    </Box>
                  )}
                </Grid>
              );
            })}
          </Grid>
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "30px" }}
            className={loginAndSigninBtn}
            // disabled={!isValid}
          >
            {btnTitle}
          </Button>
        </form>

        <Box sx={{ marginTop: "20px" }}>
          {isLogin ? (
            <Typography variant="caption">
              Have no account?{" "}
              <Link to="/sign-in" style={{ color: "blue" }}>
                create account.
              </Link>
            </Typography>
          ) : (
            <Typography variant="caption">
              Have an account?{" "}
              <Link to="/log-in" style={{ color: "blue" }}>
                log in.
              </Link>
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
