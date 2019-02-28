import emojiStrip from 'emoji-strip';
import * as R from 'ramda';

export const isValidEmail = (email: string) =>
  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
    email,
  );

export const isValidPhone = (phone: string) =>
  /^([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}$/.test(phone);

export const isValidPassword = (password: string) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password);

export const removeInvalidCharacters = (value: string) =>
  R.isEmpty(value) ? value : emojiStrip(value);
