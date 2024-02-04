import Title from '../components/title';
import { Content } from '../lib/content';

export default function Contacts() {
  return (
    <div>
      <Title title={'Contato'}></Title>
      {Content.contacts.map((contact) => {
        return (
          <a
            href={contact.url}
            target="_blank"
            className="text-sm sm:text-base flex items-center my-3"
            rel="noreferrer"
            key={contact.label}
          >
            {contact.icon}
            <p>{contact.label}</p>
          </a>
        );
      })}
    </div>
  );
}
