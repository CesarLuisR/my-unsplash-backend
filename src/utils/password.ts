import bcrypt from "bcryptjs";

export const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, hash: string): boolean =>
  bcrypt.compareSync(password, hash);
