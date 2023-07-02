import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import * as S from './SearchMovies.styled';

const schema = yup.object().shape({
  query: yup
    .string()
    .matches(/\s*\S.*$/, 'Enter something.')
    .required(),
});

const initialValues = {
  query: '',
};

const SearchMovies = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: initialValues });

  return (
    <S.Form
      autoComplete="off"
      onSubmit={handleSubmit(({ query }) => {
        onSubmit(query);
        reset();
      })}
    >
      <S.Container>
        <S.Input
          type="text"
          {...register('query')}
          placeholder="Movie search..."
        />
        {errors.query && <S.ErrorText>{errors.query.message}</S.ErrorText>}
      </S.Container>

      <S.Button type="submit">Search</S.Button>
    </S.Form>
  );
};

export default SearchMovies;

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
