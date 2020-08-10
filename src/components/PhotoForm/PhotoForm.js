import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, Col, FormText, Button, Spinner } from 'reactstrap';
import Select from 'react-select'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-field/InputField/InputField';
import SelectField from 'custom-field/SelectField/SelectField';
import RandomPhotoField from 'custom-field/Random-photo-field/RandomPhotoField';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
};
function PhotoForm(props) {

    const initialValues = {
        title: '',
        categoryId: null,
        photo: ''
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),

        categoryId: Yup.number().required('This field is required.').nullable(),

        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required.'),
            otherwise: Yup.string().notRequired()
        })
    })

    return (
        <Formik 
            initialValues={initialValues}  
            onSubmit={values => props.onSubmit(values)}
            validationSchema = {validationSchema}
        >
            {formikProps => {
                
                const {error, value, touched, isSubmitting} = formikProps;

                return (
                    <Form className="photo-add-edit__form">
                        <FastField
                            name="title"
                            component={InputField}

                            label="Email"
                            placeholder="Eg: Wow nature"
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?" 
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                           
                           <FastField
                                name="photo"
                                component={RandomPhotoField}
                                label="Photo"
                            />
                        <FormGroup >
                            <Button type="submit" color="primary">
                                {isSubmitting && <Spinner size="sm"/>}
                                Add to album
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;