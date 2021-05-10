export const formatForm = (formData) => {
    let formatedData =  {
        ...formData,
        address: {
            zipcode: formData.zipcode,
            city: formData.city,
            street: formData.street,
            suite: formData.suite,
        },
        company: {
            name: formData.company_name,
            catchPhrase: formData.catchPhrase,
            bs: formData.bs,
        }
    }
    return formatedData;

}