import { useState } from "react";
import Modal from "../Modal";
import { useNavigate } from "react-router";
import { Loader } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    orderDetails: [
      { product_id: "Biromes", quantity: 30 },
      { product_id: "Vasos termicos", quantity: 20 },
      { product_id: "Agendas", quantity: 50 }
    ]
  });
  const [loading, setLoading] = useState(false)

  const [openModal, setOpenModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setLoading(false)
        setOpenModal(true)
        setFormData({ name: "", email: "", company: "", orderDetails: [{ product_id: "Biromes", quantity: 30 }, { product_id: "Vasos termicos", quantity: 30 }, { product_id: "Agendas", quantity: 50 }] });
      } else {
        alert("Error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error al enviar.");
    }
  };

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setOpenModal(false)
    setTimeout(() => {
      navigate("/");
    }, 300);
  }


  return (
    <div className="bg-beige min-h-screen px-5">
      <h1 className="text-airbnb font-inter font-[600] text-center lg:text-[60px] sm:text-[48px] text-[30px] tracking-tighter text-nowrap">Contactanos</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#ffffff50] shadow-xl rounded px-8 pt-6 pb-8 mt-8"
      >
        <div className="flex gap-8 mb-6">
          <div className="mb-4 flex-1">
            <label
              htmlFor="name"
              className="font-inter block text-[#2C2C2C] text-sm font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#2C2C2C] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4 flex-1">
            <label
              htmlFor="email"
              className="font-inter block text-[#2C2C2C] text-sm font-bold mb-2"
            >
              Correo electronico
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 text-[#2C2C2C] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="mb-6 flex-1">
            <label
              htmlFor="company"
              className="font-inter block text-[#2C2C2C] text-sm font-bold mb-2"
            >
              Empresa
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#2C2C2C] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6 flex-1">
            <label
              htmlFor="logo"
              className="font-inter block text-[#2C2C2C] text-sm font-bold mb-2"
            >
              Logotipo
            </label>

            <div className="flex flex-col gap-4">
              <label
                htmlFor="logo"
                className="cursor-pointer text-center bg-[#f5f3f1] hover:bg-[#ece9e6] text-[#2C2C2C] text-sm font-medium py-2 rounded-lg shadow-sm border border-[#ddd] transition-colors duration-200"
              >
                Seleccionar archivo
              </label>
              <span className="text-sm text-gray-400 truncate" id="file-name">Ningún archivo seleccionado</span>

            </div>

            <input
              type="file"
              id="logo"
              name="logo"
              className="hidden"
              onChange={(e) => {
                const fileName = e.target.files?.[0]?.name || 'Ningún archivo seleccionado';
                document.getElementById("file-name").textContent = fileName;
              }}
              
            />
          </div>
        </div>
          <div className="my-6">
            <label
              htmlFor="orderDetails"
              className="font-inter block text-[#2C2C2C] text-sm text-center font-bold mb-2"
            >
              Detalles del Pedido
            </label>
            <input
              type="text"
              id="orderDetails"
              name="orderDetails"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#2C2C2C] leading-tight focus:outline-none focus:shadow-outline"
              
            />
          </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#f5f1ed] text-[#2c2c2c] font-[500] py-2 px-4 rounded shadow-lg transition hover:bg-[#f0eeec]"
          >
            {loading ? <Loader className="animate-spin [animation-duration:2s]"></Loader> : "Enviar"}
          </button>
        </div>
      </form>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex-col items-center">
          <div className="flex-col items-center text-center px-4">
            <h3 className="font-inter text-2xl font-bold mb-2">Recibimos tu Pedido</h3>
            <p className="font-inter mb-4 text-gray-800">
              Revisa tu bandeja de entrada <br /> para la confirmacion del pedido.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              className="bg-[#faf9f8] text-[#2c2c2c] font-[500] py-2 px-4 rounded shadow-lg transition hover:bg-[#f0eeec]"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
