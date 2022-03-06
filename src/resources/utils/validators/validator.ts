const messages = {
  isEmpty: 'o atributo não pode vir vazio'
}

export class Validations {
  public errors: string[] = []

  isEmpty(value: number | string) {
    const _ = String(value)
    if (_.length <= 0) this.errors.push(messages.isEmpty)
  }
}

// export function validator() {
//   let errors: string[] = []

//   function isEmpty(value: number | string) {
//     const __value = String(value)
//     if (__value.length <= 0) errors.push(messages.isEmpty)
//   }

//   return {
//     errors,
//     isEmpty
//   }
// }
