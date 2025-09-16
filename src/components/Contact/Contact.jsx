import { useState } from "react";
import { Plus, Trash2, Upload, MapPin, User, Building, Package, Mail, Phone } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    companyName: '',
    companyLogo: null,
    email: '',
    phone: '',
    deliveryLocation: '',
    products: [{ name: '', quantity: 1 }],
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle logo file upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      companyLogo: file
    }));
  };

  // Handle product changes
  const handleProductChange = (index, field, value) => {
    const updatedProducts = formData.products.map((product, i) =>
      i === index ? { ...product, [field]: value } : product
    );
    setFormData(prev => ({
      ...prev,
      products: updatedProducts
    }));
  };

  // Add new product
  const addProduct = () => {
    setFormData(prev => ({
      ...prev,
      products: [...prev.products, { name: '', quantity: 1 }]
    }));
  };

  // Remove product
  const removeProduct = (index) => {
    if (formData.products.length > 1) {
      const updatedProducts = formData.products.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        products: updatedProducts
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Create FormData for file upload
      const submitData = new FormData();

      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'products') {
          submitData.append('products', JSON.stringify(formData.products));
        } else if (key === 'companyLogo' && formData.companyLogo) {
          submitData.append('companyLogo', formData.companyLogo);
        } else {
          submitData.append(key, formData[key]);
        }
      });

      // Simulate API call (replace with your actual endpoint)
      await fetch('/api/contact/submit', {
        method: 'POST',
        body: submitData
      });

      setSubmitMessage('¡Solicitud enviada exitosamente! Te contactaremos pronto.');

      // Reset form
      setFormData({
        contactName: '',
        companyName: '',
        companyLogo: null,
        email: '',
        phone: '',
        deliveryLocation: '',
        products: [{ name: '', quantity: 1 }],
        additionalNotes: ''
      });

    } catch (error) {
      setSubmitMessage('Error al enviar la solicitud. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalProducts = formData.products.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <div className="min-h-screen bg-beige py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-bold text-airbnb mb-4">
            Solicitar Presupuesto
          </h1>
          <p className="text-lg text-gray-700 font-inter max-w-2xl mx-auto">
            Completa el formulario con los detalles de tu pedido y te enviaremos un presupuesto personalizado
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-inter font-semibold text-airbnb mb-6 flex items-center">
              <User className="w-6 h-6 mr-2" />
              Información de Contacto
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Nombre del Responsable *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb focus:border-airbnb font-inter"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb focus:border-airbnb font-inter"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb focus:border-airbnb font-inter"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb focus:border-airbnb font-inter"
                    placeholder="+54 341 123-4567"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Company Logo */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-inter font-semibold text-airbnb mb-6 flex items-center">
              <Building className="w-6 h-6 mr-2" />
              Logo de la Empresa
            </h2>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-airbnb transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <label className="cursor-pointer">
                <span className="text-airbnb font-inter font-medium hover:underline">
                  Subir logo de empresa
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2 font-inter">PNG, JPG hasta 5MB</p>
              {formData.companyLogo && (
                <p className="text-sm text-airbnb mt-2 font-inter font-medium">
                  ✓ {formData.companyLogo.name}
                </p>
              )}
            </div>
          </div>

          {/* Products */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-inter font-semibold text-airbnb flex items-center">
                <Package className="w-6 h-6 mr-2" />
                Productos Solicitados
              </h2>
              <div className="text-sm font-inter text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                Total: {totalProducts} productos
              </div>
            </div>

            {formData.products.map((product, index) => (
              <div key={index} className="flex gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={product.name}
                    onChange={(e) => handleProductChange(index, 'name', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb focus:border-airbnb font-inter"
                  />
                </div>
                <div className="w-32">
                  <input
                    type="number"
                    placeholder="Cantidad"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => handleProductChange(index, 'quantity', parseInt(e.target.value) || 1)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb focus:border-airbnb font-inter text-center"
                  />
                </div>
                {formData.products.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeProduct(index)}
                    className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addProduct}
              className="flex items-center gap-2 px-4 py-2 text-airbnb border border-airbnb rounded-lg hover:bg-airbnb hover:text-white transition-colors font-inter font-medium"
            >
              <Plus className="w-5 h-5" />
              Agregar Producto
            </button>
          </div>

          {/* Delivery Location */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-inter font-semibold text-airbnb mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-2" />
              Ubicación de Entrega
            </h2>

            <textarea
              name="deliveryLocation"
              value={formData.deliveryLocation}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb focus:border-airbnb font-inter resize-none"
              placeholder="Dirección completa para la entrega (calle, número, ciudad, provincia, código postal)"
            />
          </div>

          {/* Additional Notes */}
          <div className="mb-8">
            <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
              Notas Adicionales
            </label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-airbnb focus:border-airbnb font-inter resize-none"
              placeholder="Cualquier información adicional sobre tu pedido, fechas especiales, colores específicos, etc."
            />
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg font-inter ${submitMessage.includes('Error')
                ? 'bg-red-50 text-red-700 border border-red-200'
                : 'bg-green-50 text-green-700 border border-green-200'
              }`}>
              {submitMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-airbnb text-white py-4 px-6 rounded-lg font-inter font-semibold text-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud de Presupuesto'}
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center font-inter">
            * Campos obligatorios. Te responderemos dentro de 24 horas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;