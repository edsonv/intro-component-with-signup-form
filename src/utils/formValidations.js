const regex = {
  email: new RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  )
};

export class Validators {
  static required(value, message) {
    if (!value || !value.toString().trim().length) {
      return { error: true, message };
    }
    return false;
  }

  static email(value, message) {
    if (value) {
      const result = regex.email.test(value)
      if (!result)
        return { error: true, message }
    }
  }
}

export const validateInput = (validators, value, id) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      const error = validators[i].check(value, validators[i].message);
      if (error) {
        return error;
      }
    }
  }
  return false;
};

