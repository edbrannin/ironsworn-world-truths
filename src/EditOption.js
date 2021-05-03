import { useForm } from 'react-hook-form';

const EditOption = ({ values, setOption }) => {
  const onSubmit = (data) => setOption(data);
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" placeholder="Name" {...register('name')} />
      <textarea name="description" {...register('description')} placeholder="Description" />
      <textarea name="questStarter" {...register('questStarter')} placeholder="Quest Starter"/>
      <input type="submit" />
    </form>
  )
}

export default EditOption;
