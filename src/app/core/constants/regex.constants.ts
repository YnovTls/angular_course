export const PASSWORD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

export const EMAIL_REGEX = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const URL_REGEX = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

export const SPECIAL_CHARACTERS = new RegExp(/[-!$%&*_+=?,.@#]/);

export const ALPHA_LOWER_ONLY = new RegExp(/^[a-z]+$/);

export const ALPHA_UPPER_ONLY = new RegExp(/^[A-Z]+$/);

export const ALPHA_ONLY = new RegExp(/^[a-zA-Z]+$/);

export const NUMERIC_ONLY = new RegExp(/^[0-9]+$/);

export const ALPHA_NUMERIC = new RegExp(/^[a-zA-Z0-9]+$/);
