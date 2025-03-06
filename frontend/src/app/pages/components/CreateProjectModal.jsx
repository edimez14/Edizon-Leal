"use client";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@heroui/react";
import { Flex, VStack, HStack, Badge } from "@chakra-ui/react";
import DynamicIcon from "@/app/components/DynamicIcon";
import { BackendRequest } from "@/app/utils/Request.api";

// Lista de íconos disponibles basados en DynamicIcon
const availableIcons = [
  'SiGodotengine', 'FaReact', 'SiDjango', 'FaPython', 'FaGitAlt',
  'FaLinux', 'FiTerminal', 'GiRabbit', 'FiKey', 'GiGamepad',
  'FiHome', 'FiPackage', 'FiShield', 'FiCpu', 'FiLayout',
  'FiGlobe', 'SiVite', 'SiRust', 'RiNextjsFill', 'FaHtml5',
  'FaCss3Alt', 'SiJavascript', 'FaRegBuilding', 'LuFlower2',
  'FiFileText', 'FaGithub', 'FaLinkedin', 'CiMail', 'FiMapPin',
  'FaLink', 'IoShieldCheckmark', 'IoLanguageSharp', 'IoSunny',
  'FaMoon', 'GrServices', 'GrProjects', 'FiPlus'
];

export default function CreateProjectModal({ lang, onProjectCreated }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);

  // Estados del formulario mejorados para coincidir con el modelo de FastAPI
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
    technology: [],
    url: {
      link: "",
      github: ""
    },
    featured_image: {
      caption: "",
      url: ""
    }
  });

  // Estados temporales para los inputs
  const [techName, setTechName] = useState("");
  const [techIcon, setTechIcon] = useState("");

  // Agregar tecnología validando el ícono
  const addTechnology = () => {
    if (techName && techIcon && availableIcons.includes(techIcon)) {
      setFormData(prev => ({
        ...prev,
        technology: [...prev.technology, { icon: techIcon, texto: techName }]
      }));
      setTechName("");
      setTechIcon("");
    }
  };

  // Enviar datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await BackendRequest(
        "POST",
        "add-project",
        formData
      );

      if (response.status === 200) {
        onOpenChange(false);
        if (onProjectCreated) onProjectCreated();
      }
    } catch (error) {
      console.error("Error creating project:", error);
    } finally {
      setLoading(false);
    }
  };

  // Resetear formulario al cerrar
  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      content: "",
      technology: [],
      url: {
        link: "",
        github: ""
      },
      featured_image: {
        caption: "",
        url: ""
      }
    });
  };

  return (
    <>
      <Flex justify="center" align="center" m={4}>
        <Button
          onPress={onOpen}
          size="xl"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        >
          <DynamicIcon icon="FiPlus" size="lg" />
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onOpenChange={(isOpen) => {
        if (!isOpen) resetForm();
        onOpenChange(isOpen);
      }} scrollBehavior={"outside"} >
        <ModalContent className="max-w-2xl">
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader>
                {lang === "en" ? "Create New Project" : "Crear Nuevo Proyecto"}
              </ModalHeader>

              <ModalBody className="space-y-4">
                {/* Campos principales */}
                <Input
                  label={lang === "en" ? "Title" : "Título"}
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  required
                />

                <Input
                  label={lang === "en" ? "Subtitle" : "Subtítulo"}
                  value={formData.subtitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                  required
                />

                {/* Selector de tecnologías */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      placeholder={lang === "en" ? "Technology name" : "Nombre de la tecnología"}
                      value={techName}
                      onChange={(e) => setTechName(e.target.value)}
                      className="flex-1"
                    />

                    <Select
                      placeholder={lang === "en" ? "Select icon" : "Seleccionar ícono"}
                      selectedKeys={[techIcon]}
                      onChange={(e) => setTechIcon(e.target.value)}
                      className="w-40"
                    >
                      {availableIcons.map(icon => (
                        <SelectItem key={icon} value={icon}>
                          <div className="flex items-center gap-2">
                            <DynamicIcon icon={icon} size="sm" />
                            {icon}
                          </div>
                        </SelectItem>
                      ))}
                    </Select>

                    <Button onPress={addTechnology} type="button">
                      {lang === "en" ? "Add" : "Agregar"}
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {formData.technology.map((tech, index) => (
                      <Badge key={index} color="primary" className="gap-1">
                        <DynamicIcon icon={tech.icon} size="sm" />
                        {tech.texto}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contenido Markdown */}
                <Textarea
                  label={lang === "en" ? "Markdown Content" : "Contenido Markdown"}
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  minRows={6}
                  required
                />

                {/* URLs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="GitHub URL"
                    type="url"
                    value={formData.url.github}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      url: { ...prev.url, github: e.target.value }
                    }))}
                    startContent={<DynamicIcon icon="FaGithub" />}
                  />

                  <Input
                    label={lang === "en" ? "Website URL" : "URL del Sitio"}
                    type="url"
                    value={formData.url.link}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      url: { ...prev.url, link: e.target.value }
                    }))}
                    startContent={<DynamicIcon icon="FiGlobe" />}
                  />
                </div>

                {/* Imagen destacada */}
                <div className="space-y-2">
                  <Input
                    label={lang === "en" ? "Featured Image URL" : "URL de la imagen principal"}
                    type="url"
                    value={formData.featured_image.url}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      featured_image: { ...prev.featured_image, url: e.target.value }
                    }))}
                    startContent={<DynamicIcon icon="FiImage" />}
                  />

                  <Input
                    label={lang === "en" ? "Image Caption" : "Descripción de la imagen"}
                    value={formData.featured_image.caption}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      featured_image: { ...prev.featured_image, caption: e.target.value }
                    }))}
                  />
                </div>
              </ModalBody>

              <ModalFooter>
                <Button type="submit" color="primary" isLoading={loading}>
                  {lang === "en" ? "Create Project" : "Crear Proyecto"}
                </Button>
                <Button variant="light" color="danger" onPress={onClose}>
                  {lang === "en" ? "Cancel" : "Cancelar"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
