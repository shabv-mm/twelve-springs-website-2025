import React from 'react'

const test = () => {
  return (
    <div>
      <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                {...register('name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '5px'
                      }}
                    >
                      <img src={userSignup} alt="user signup" />
                    </InputAdornment>
                  ),
                }}
                placeholder="Your Name"
                fullWidth
                sx={{
                  backgroundColor: "#303030",
                  opacity: "0.6",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                    color: "white",
                    fontFamily: "poppins",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    paddingTop: '5px',
                    paddingLeft: '40px',
                    height: "35px"
                  },
                }}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...register('companyName')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '5px'
                      }}
                    >
                      <img src={category} alt="Company name" />
                    </InputAdornment>
                  ),
                }}
                placeholder="Your Company Name"
                fullWidth
                sx={{
                  backgroundColor: "#303030",
                  opacity: "0.6",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                    color: "white",
                    fontFamily: "poppins",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    paddingTop: '5px',
                    paddingLeft: '40px',
                    height: "35px"
                  },
                }}
                error={!!errors.companyName}
                helperText={errors.companyName ? errors?.companyName?.message : ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...register('email')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '5px'
                      }}
                    >
                      <img src={smsTracking} alt="sms tracking" />
                    </InputAdornment>
                  ),
                }}
                placeholder="Email"
                fullWidth
                sx={{
                  backgroundColor: "#303030",
                  opacity: "0.6",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                    color: "white",
                    fontFamily: "poppins",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    paddingTop: '5px',
                    paddingLeft: '40px',
                    height: "35px"
                  },
                }}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>


              <Controller
                name="phone"
                control={control}
                render={({ field }) => (

                  <PhoneInput
                  {...field}
                  country={'gb'}
                  fullWidth
                  onChange={(phone) => field.onChange(phone)}
                  inputStyle={{
                    width: "100%",
                    height: "45px",
                    borderRadius: "0px",
                    color: "white",
                    backgroundColor: "#303030",
                    fontFamily: "Poppins",
                    opacity: "0.6",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: errors?.phone ? "1px solid #d32f2f" : "transparent",
                    boxShadow: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderTop = "none";
                    e.target.style.borderLeft = "none";
                    e.target.style.borderRight = "none";
                    e.target.style.borderBottom = errors.phone ? "2px solid #d32f2f" : "2px solid #1a73e8";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderBottom = errors.phone ? "1px solid #d32f2f" : "transparent";
                  }}
                  dropdownStyle={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "0px",
                    zIndex: 1200, // Ensure the dropdown is above other elements
                  }}
                  specialLabel=""
                />
                
                )}
              />
              {errors.phone && (
                <Box sx={{ backgroundColor: "#303030", opacity: "0.6", }} >
                  <Typography
                    color="error"
                    sx={{
                      color: "#d32f2f",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: '0.75rem',
                      lineHeight: '1.66',
                      textAlign: 'left',
                      paddingTop: '3px',
                      marginTight: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                    }}
                  >
                    {errors.phone.message}
                  </Typography>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                {...register('message')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '5px'
                      }}
                    >
                      <Box
                        component="img"
                        src={msgText}
                        alt='message'
                        sx={{
                          height: "24px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                placeholder="Message"
                fullWidth
                sx={{
                  backgroundColor: "#303030",
                  opacity: "0.6",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                    color: "white",
                    fontFamily: "Poppins",
                    alignItems: "flex-start",
                    paddingTop: '32px',
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    paddingTop: '5px',
                    paddingLeft: '40px',
                  },
                }}
                multiline
                rows={3}
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ''}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                {...register('projectTitle')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '5px'
                      }}
                    >
                       <img src={userSignup} alt="user signup" /> 
                      <Box
                        component="img"
                        src={msgText}
                        alt='project title'
                        sx={{
                          height: "24px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                placeholder="Brief title of the project"
                fullWidth
                sx={{
                  backgroundColor: "#303030",
                  opacity: "0.6",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                    color: "white",
                    fontFamily: "poppins",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    paddingTop: '5px',
                    paddingLeft: '40px',
                    height: "35px"
                  },
                }}
                error={!!errors.projectTitle}
                helperText={errors.projectTitle ? errors.projectTitle.message : ''}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                {...register('projectDescription')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '5px'
                      }}
                    >
                      <Box
                        component="img"
                        src={msgText}
                        alt='projectDescription'
                        sx={{
                          height: "24px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                placeholder="Detailed description of what the project entails"
                fullWidth
                sx={{
                  backgroundColor: "#303030",
                  opacity: "0.6",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                    color: "white",
                    fontFamily: "Poppins",
                    alignItems: "flex-start",
                    paddingTop: '32px',
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    paddingTop: '5px',
                    paddingLeft: '40px',
                  },
                }}
                multiline
                rows={3}
                error={!!errors.projectDescription}
                helperText={errors.projectDescription ? errors.projectDescription.message : ''}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                {...register('projectGoal')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '5px'
                      }}
                    >
                      <Box
                        component="img"
                        src={msgText}
                        alt='goal'
                        sx={{
                          height: "24px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                placeholder="What do you hope to achieve with this project?"
                fullWidth
                sx={{
                  backgroundColor: "#303030",
                  opacity: "0.6",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0px",
                    color: "white",
                    fontFamily: "Poppins",
                    alignItems: "flex-start",
                    paddingTop: '32px',
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    paddingTop: '5px',
                    paddingLeft: '40px',
                  },
                }}
                multiline
                rows={3}
                error={!!errors.projectGoal}
                helperText={errors.projectGoal ? errors.projectGoal.message : ''}
              />
            </Grid>
          </Grid> 
          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              justifyContent: "flex-end",
              mt: 2,
            }}
          >

            <ReCAPTCHA sitekey="6Leogv0pAAAAAB3fEmqj88P-Q4pDnWYNAaZ7iliN" // Replace with your actual site key
              onChange={onRecaptchaChange} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              justifyContent: "flex-end",
              mt: 2,
            }}
          >

            <Button
              type="submit"
              endIcon={<img src={nonBgLogin} alt="login" />}
              sx={{
                backgroundColor: "#00A1FF",
                borderRadius: "0px",
                color: "white",
                fontFamily: "poppins",
                textTransform: "capitalize",
                px: 3,
                py: 1,
              }}
              onClick={() => handleSubmit(handleAdd)()}
            >
              Send message
            </Button>
          </Box> 
    </div>
  )
}

export default test
