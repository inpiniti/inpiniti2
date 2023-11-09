<template>
  <Column class="h-screen">
    <Header />
    <Nav />
    <Row>
      <Column class="flex-grow">
        <Section />
        <Articel><slot /></Articel>
      </Column>
      <Aside />
    </Row>
    <Footer />
  </Column>
</template>
