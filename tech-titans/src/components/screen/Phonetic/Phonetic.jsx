import {Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const neighborhoods = ['ЦАО','САО','СВАО','ЮВАО','ЮАО','ЮЗАО','ЗАО','СЗАО','ЗелАО','ТиНАО']

const Phonetic = (props) => {
  const {handleSubmit, register, reset, control} = useForm();
  const pull = (data) => {
    console.log(data)
  }
  return (
      <form onSubmit={handleSubmit(pull)}>
        <fieldset>
          <label>
            <span>Имя</span>
            <input type='text' {...register('name', {required: true})}
                   placeholder="Имя"/>
          </label>
          <label>
            <span>Фамилия</span>
            <input type='text' {...register('surname', {required: true})}
                   placeholder="Фамилия"/>
          </label>
          <label>
            <span>Отчество</span>
            <input type='text' {...register('patronymic', {required: true})}
                   placeholder="Отчество"/>
          </label>
          <label>
            <span>Дата рождения</span>
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
        <fieldset>
          <label>
            <span>М</span>
            <input type='radio' {...register('sex', {required: true})}
                   value='m'
                   placeholder="М"/>
          </label>
          <label>
            <span>Ж</span>
            <input type='radio' {...register('sex', {required: true})}
                   value='w'
                   placeholder="Ж"/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <span>Город проживания</span>
            <input type='text' {...register('city', {required: true})}
                   placeholder="Город проживания"/>
          </label>
          <label>
            <span>Район</span>
            <select {...register('neighborhood', {required: true})}>
              {neighborhoods.map((el, i) => <option value={el} key={i}>{el}</option>)}
            </select>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <span>Гражданство</span>
            <input type='text' {...register('citizen', {required: true})}
                   placeholder="Гражданство"/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <span>Образование</span>
            <input type='text' {...register('education', {required: true})}
                   placeholder="Образование"/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <span>Email</span>
            <input type='email' {...register('email', {required: true})}
                   placeholder="Email"/>
          </label>
          <label>
            <span>Номер телефона</span>
            <input type='tel' {...register('phone', {required: true, minLength: 6, maxLength: 12})}
                   placeholder="Номер телефона"/>
          </label>
        </fieldset>


        <button type="submit">Отправить</button>
      </form>
  );
}
export default Phonetic;