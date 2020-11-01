export default function Section({ title, children }) {
return (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);
}
