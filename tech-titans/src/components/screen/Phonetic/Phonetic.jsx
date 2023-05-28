import {Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './Phonetic.css';

const neighborhoods = ['ЦАО','САО','СВАО','ЮВАО','ЮАО','ЮЗАО','ЗАО','СЗАО','ЗелАО','ТиНАО']

const Phonetic = () => {
  const {handleSubmit, register, reset, control} = useForm();
  const pull = (data) => {
    console.log(data)
    reset();
  }
  return (
      <form onSubmit={handleSubmit(pull)} className='phonetic'>
        <fieldset className='phonetic__field'>
          <legend>
            Основная информация
          </legend>
          <label>
            <span className='phonetic__text'>Имя</span>
            <input type='text' {...register('name', {required: true})}
                   placeholder="Имя"/>
          </label>
          <label>
            <span className='phonetic__text'>Фамилия</span>
            <input type='text' {...register('surname', {required: true})}
                   placeholder="Фамилия"/>
          </label>
          <label>
            <span className='phonetic__text'>Отчество</span>
            <input type='text' {...register('patronymic', {required: true})}
                   placeholder="Отчество"/>
          </label>
          <label>
            <span className='phonetic__text'>Дата рождения</span>
            <Controller
                control={control}
                name='birthday'
                render={({ field }) => (
                    <DatePicker
                        placeholderText='Select date'
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                    />
                )}
            />
          </label>
        </fieldset>

        <fieldset className='phonetic__field'>
          <legend>Пол</legend>
          <label>
            <span className='phonetic__text'>М</span>
            <input type='radio' {...register('sex', {required: true})}
                   value='m'
                   placeholder="М"/>
          </label>
          <label>
            <span className='phonetic__text'>Ж</span>
            <input type='radio' {...register('sex', {required: true})}
                   value='w'
                   placeholder="Ж"/>
          </label>
        </fieldset>

        <fieldset className='phonetic__field'>
          <legend>
            Проживание и гражданство
          </legend>
          <label>
            <span className='phonetic__text'>Гражданство</span>
            <input type='text' {...register('citizen', {required: true})}
                   placeholder="Гражданство"/>
          </label>
          <label>
            <span className='phonetic__text'>Город проживания</span>
            <input type='text' {...register('city', {required: true})}
                   placeholder="Город проживания"/>
          </label>
          <label>
            <span className='phonetic__text'>Район</span>
            <select {...register('neighborhood', {required: true})}>
              {neighborhoods.map((el, i) => <option value={el} key={i}>{el}</option>)}
            </select>
          </label>
        </fieldset>

        <fieldset className='phonetic__field'>
          <legend>
            Контактные данные
          </legend>
          <label>
            <span className='phonetic__text'>Email</span>
            <input type='email' {...register('email', {required: true})}
                   placeholder="Email"/>
          </label>
          <label>
            <span className='phonetic__text'>Номер телефона</span>
            <input type='tel' {...register('phone', {required: true, minLength: 6, maxLength: 12})}
                   placeholder="Номер телефона"/>
          </label>
          <label>
            <span className='phonetic__text'>Профиль в сети Вконтакте</span>
            <input type='text' {...register('vkLink', )}
                   placeholder="Профиль в сети Вконтакте"/>
          </label>
          <label>
            <span className='phonetic__text'>Аккаунт telegram</span>
            <input type='text' {...register('telegramLink', )}
                   placeholder="Аккаунт telegram"/>
          </label>
        </fieldset>
        <fieldset className='phonetic__field'>
          <legend>Образование</legend>
          <label>
            <span className='phonetic__text'>Уровень образования</span>
            <input type='text' {...register('educationDegree', {required: true})}
                   placeholder="Уровень образования"/>
          </label>
          <label>
            <span className='phonetic__text'>Учебное заведение</span>
            <input type='text' {...register('educationSchool', {required: true})}
                   placeholder="Учебное заведение"/>
          </label>
          <label>
            <span className='phonetic__text'>Город</span>
            <input type='text' {...register('educationCity', {required: true})}
                   placeholder="Город"/>
          </label>
          <label>
            <span className='phonetic__text'>Факультет</span>
            <input type='text' {...register('educationDepartment', {required: true})}
                   placeholder="Факультет"/>
          </label>
          <label>
            <span className='phonetic__text'>Специальность</span>
            <input type='text' {...register('educationBusiness', {required: true})}
                   placeholder="Специальность"/>
          </label>
          <label>
            <span className='phonetic__text'>Год окончания</span>
            <select {...register('educationYear', {required: true})}>
              {[...Array(50)].map((el, i) => <option value={new Date().getFullYear() - i} key={i}>{new Date().getFullYear() - i}</option>)}
            </select>
          </label>
        </fieldset>

        <fieldset className='phonetic__field'>
          <legend>Опыт работы</legend>
          <textarea name="jobs"
                    cols="30"
                    rows="10"></textarea>
        </fieldset>


        <button type="submit">Отправить</button>
      </form>
  );
}
export default Phonetic;