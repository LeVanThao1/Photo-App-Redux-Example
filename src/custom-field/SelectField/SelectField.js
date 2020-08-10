import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    options: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

SelectField.defaultProps = {
    options: [],
    label: "",
    placeholder: "",
    disabled: false
}

function SelectField(props) {

    const { field, form,
        options, label, placeholder, disabled } = props;

    const { name, value, onChange, onBlur } = field;
    const selectedOption = options.find(option => option.value === value)

    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    const handleSelecteOption = (selectedOption) => {
        const selectedValue = selectedOption? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent)
    }
    
    return (
        <FormGroup >
            {label && <Label for={name} sm={2}>{label}</Label>}
            <Select 
                id={name}
                {... field}
                value={selectedOption}
                onChange={handleSelecteOption}
                placeholder={placeholder}
                options={options}
                className={showError? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback}/>
        </FormGroup> 
    );
}

export default SelectField;